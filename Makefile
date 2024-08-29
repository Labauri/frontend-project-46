.PHONY: help

gendiff-help:
	gendiff -h

lint:
	npx eslint . --fix

test:
	cmd.exe /c gradlew.bat test

coverage:
	cmd.exe /c gradlew.bat jacocoTestReport

install:
	npm install

