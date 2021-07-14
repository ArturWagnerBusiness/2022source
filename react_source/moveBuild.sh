#!/bin/bash
rm ../images/ -fr
mv build/images ../images
rm ../static/ -fr
mv build/static ../static
mv build/asset-manifest.json ../asset-manifest.json
mv build/index.html ../index.html
mv build/manifest.json ../manifest.json
mv build/robots.txt ../robots.txt
