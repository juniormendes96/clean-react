import React from 'react'
import { useRecoilValue } from 'recoil'
import Styles from './answer-styles.scss'

import { SurveyResultAnswerModel } from '@/domain/models'
import { onSurveyAnswerState } from '@/presentation/pages/survey-result/components'

type Props = {
  answer: SurveyResultAnswerModel
}

const Answer: React.FC<Props> = ({ answer }: Props) => {
  const { onAnswer } = useRecoilValue(onSurveyAnswerState)
  const activeClassName = answer.isCurrentAccountAnswer ? Styles.active : ''
  const answerClick = (): void => {
    if (answer.isCurrentAccountAnswer) {
      return
    }

    onAnswer(answer.answer)
  }

  return (
    <li
      data-testid="answer-wrap"
      className={[Styles.answerWrap, activeClassName].join(' ')}
      onClick={answerClick}
    >
      {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
      <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
      <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
    </li>
  )
}

export default Answer
