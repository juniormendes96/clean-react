import faker from 'faker'

import { RemoteLoadSurveyResult } from './remote-load-survey-result'
import { HttpGetClientSpy } from '@/data/test'

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)

    await sut.load()

    expect(httpGetClientSpy.url).toBe(url)
  })
})
