.PHONY: help

gendiff-help:
	gendiff -h

lint:
	npx eslint . --fix
