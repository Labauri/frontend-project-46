.PHONY: help

gendiff-help:
	gendiff -h

lint:
	npx eslint . --fix

test:
    ./gradlew test

coverage:
    ./gradlew jacocoTestReport
