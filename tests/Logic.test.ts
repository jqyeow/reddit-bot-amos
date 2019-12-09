import Logic from '../src/util/Logic'

describe('Logic', () => {

	test('Title contains "Amos"', async () => {
		expect(Logic.is_amos_yee_thread({
			data: {
				title: 'today i saw amos get beaten up',
				selftext: 'some selftext'
			}
		} as any)).toEqual(true)
	})

	test('Thread body contains "Amos Yee"', async () => {
		expect(Logic.is_amos_yee_thread({
			data: {
				title: 'some title',
				selftext: 'imagine if elon musk called amos yee a pedoguy'
			}
		} as any)).toEqual(true)
	})

	test('Thread does not contain "Amos"', async () => {
		expect(Logic.is_amos_yee_thread({
			data: {
				title: 'some title',
				selftext: 'some self text'
			}
		} as any)).toEqual(false)
	})

	test('Thread selftext is case insensitive', async () => {
		expect(Logic.is_amos_yee_thread({
			data: {
				title: 'some title',
				selftext: 'LOREM IPSUM aMoS YeE'
			}
		} as any)).toEqual(true)
	})

	test('Thread title is case insensitive', async () => {
		expect(Logic.is_amos_yee_thread({
			data: {
				title: 'my hero is AmOs',
				selftext: 'some selftext'
			}
		} as any)).toEqual(true)
	})

	test('Comment contains "Amos Yee"', async () => {
		expect(Logic.is_amos_yee_comment({
			data: {
				body: 'today i saw amos yee get beaten up sia'
			}
		} as any)).toEqual(true)
	})

	test('Comment does not contain "Amos Yee"', async () => {
		expect(Logic.is_amos_yee_comment({
			data: {
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			}
		} as any)).toEqual(false)
	})

	test('Comment is case insensitive', async () => {
		expect(Logic.is_amos_yee_comment({
			data: {
				body: 'Lorem ipsum dolor aMoS YeE sit amet, consectetur adipiscing elit'
			}
		} as any)).toEqual(true)
	})
})
