.PHONY: test

gendiff-help:
	gendiff -h

lint:
	npx eslint . --fix

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

install:
	npm install

