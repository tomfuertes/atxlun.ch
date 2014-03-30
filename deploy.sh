#!/usr/bin/env bash
gulp build
aws s3 sync --acl=public-read --delete ./dist/ s3://atxlun.ch/
