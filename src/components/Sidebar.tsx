import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSON_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			lessonType
			availableAt
			title
			slug
		}
	}
`
interface GetLessonsQueryResponse {
	lessons: {
		id: string
		title: string
		slug: string
		availableAt: string
		lesssonType: 'live' | 'class'
	}[]
}

export function Sidebar() {
	const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY)

	console.log(data)

	return (
		<aside className="w-[348px] bg-blue-900 p-6 border-l border-gray-300">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-300 block">
				Cronograma das aulas
			</span>

			<div className="flex flex-col gap-8">
				{data?.lessons.map((lesson) => {
					return (
						<Lesson
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							availableAt={new Date(lesson.availableAt)}
							type={lesson.lesssonType}
						/>
					)
				})}
			</div>
		</aside>
	)
}
