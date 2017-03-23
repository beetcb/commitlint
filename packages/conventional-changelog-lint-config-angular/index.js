module.exports = {
	rules: {
		'body-leading-blank': [1,
			'always'
		],
		'body-tense': [1,
			'always',
			['present-imperative']
		],
		'footer-leading-blank': [1,
			'always'
		],
		'footer-tense': [1,
			'always',
			['present-imperative']
		],
		'header-max-length': [2,
			'always',
			72
		],
		lang: [1,
			'always',
			'eng'
		],
		'scope-case': [2,
			'always',
			'lowerCase'
		],
		'subject-empty': [2,
			'never'
		],
		'subject-full-stop': [2,
			'never',
			'.'
		],
		'subject-tense': [1,
			'always',
			['present-imperative']
		],
		'type-case': [2,
			'always',
			'lowerCase'
		],
		'type-empty': [2,
			'never'
		],
		'type-enum': [2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	},
	wildcards: {
		merge: [
			'^(Merge pull request)|(Merge (.*?) into (.*?)|(Merge (.*?) branch (.*?))$)'
		],
		release: [
			'^\\d+.\\d+.\\d+\n?$'
		],
		revert: [
			'^revert: (.*)'
		],
		prerelease: [
			'^(\\d*.\\d*.\\d*)(?:-)(?:(\\d.{0,3})|alpha|beta|rc)(.\\d*)?$'
		]
	}
};
