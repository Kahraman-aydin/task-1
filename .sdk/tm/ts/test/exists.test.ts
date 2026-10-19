
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenMeteoSdkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenMeteoSdkSDK.test()
    equal(testsdk instanceof OpenMeteoSdkSDK, true,
      'OpenMeteoSdkSDK.test() must return a client synchronously')
  })

})
