cp -rf ./build/* ./../../sharu95.github.io/

cd ../../sharu95.github.io/ && git add . && git commit -m "See source on https://github.com/Sharu95/website" && git push

echo "Deployed"