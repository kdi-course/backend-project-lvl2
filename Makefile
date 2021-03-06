setup: install link

install:
	npm ci

publish:
	npm publish --dry-run

link:
	npm link
	
lint:
	npx eslint .

test:
	npm test

test-watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

remove:
	npm rm --global @hexlet/code	