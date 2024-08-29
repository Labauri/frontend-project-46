.PHONY: help

gendiff-help:
	gendiff -h

lint:
	npx eslint . --fix

test:
	gradlew.bat test

coverage:
	gradlew.bat jacocoTestReport

install:
	npm install

