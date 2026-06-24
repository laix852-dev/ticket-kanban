#!/bin/bash
# ====== 工单看板自动部署 ======
# 用法:
#   ./deploy.sh          # 手动部署
#   ./deploy.sh --watch  # 监听模式：文件变化自动部署
set -e

TOKEN="nfp_SsMb7ebderVhQ2rzwUy7BxFbgnojST4a21a7"
SITE_ID="b71fed20-0e3c-4bb6-9512-9aa2dbc7a367"
SOURCE="/Users/laixinyi/lobsterai/project/工单看板_v3.html"
URL="https://bespoke-fox-aaecf6.netlify.app"
TEMP_DIR="/tmp/kanban-deploy"

deploy() {
    echo "[$(date '+%H:%M:%S')] 📦 部署中..."
    rm -rf "$TEMP_DIR"
    mkdir -p "$TEMP_DIR"
    cp "$SOURCE" "$TEMP_DIR/index.html"
    cd "$TEMP_DIR"
    npx --yes netlify-cli deploy --prod --dir=. --site "$SITE_ID" --auth "$TOKEN" 2>&1 | tail -3
    rm -rf "$TEMP_DIR"
    echo "[$(date '+%H:%M:%S')] ✅ $URL"
}

case "${1:-}" in
  --watch)
    echo "👀 监听中: $SOURCE"
    echo "   文件变化时自动部署到 $URL"
    LAST_HASH=""
    while true; do
      CURRENT_HASH=$(md5 -q "$SOURCE" 2>/dev/null || md5sum "$SOURCE" | cut -d' ' -f1)
      if [ "$CURRENT_HASH" != "$LAST_HASH" ] && [ -n "$LAST_HASH" ]; then
        deploy
      fi
      LAST_HASH="$CURRENT_HASH"
      sleep 30
    done
    ;;
  *)
    deploy
    ;;
esac
