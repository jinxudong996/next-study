import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
// import Console from '@alicloud/tea-console';
import Util, * as $Util from '@alicloud/tea-util';
import * as $tea from '@alicloud/tea-typescript';

export default class Client {

  private static client: Dysmsapi20170525;

  /**
   * 使用AK&SK初始化账号Client
   * @returns Client
   * @throws Exception
   */
  static createClient(): Dysmsapi20170525 {
    if (!Client.client) {
      const config = new $OpenApi.Config({
       
      });
      config.endpoint = `dysmsapi.aliyuncs.com`;
      Client.client = new Dysmsapi20170525(config);
    }
    return Client.client;
  }

  /**
   * 发送短信验证码
   * @param phoneNumbers 手机号码
   * @param signName 签名名称
   * @param templateCode 模板代码
   * @param templateParam 模板参数
   * @returns Promise
   */
  static async sendSms(phoneNumbers: string, signName: string, templateCode: string, templateParam: string): Promise<any> {
    const client = Client.createClient();
    const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
      phoneNumbers,
      signName,
      templateCode,
      templateParam
    });
    const runtime = new $Util.RuntimeOptions({});
    try {
      const resp = await client.sendSmsWithOptions(sendSmsRequest, runtime);
      return resp;
    } catch (error) {
      console.log(error);
      // console.log(error.data["Recommend"]);
      // Util.assertAsString(error.message);
      throw error;
    }
  }

  // static async main(args: string[]): Promise<void> {
  //   const phoneNumbers = '18751241086';  // 替换为接收短信的手机号码
  //   const signName = '南在南方';  // 替换为你的签名名称
  //   const templateCode = 'SMS_473020054';  // 替换为你的模板代码
  //   const templateParam = '{"code":"2424"}';  // 替换为验证码或其他参数

  //   try {
  //     const resp = await Client.sendSms(phoneNumbers, signName, templateCode, templateParam);
  //     console.log(Util.toJSONString(resp));
  //   } catch (error) {
  //     console.error('Error sending SMS:', error);
  //   }
  // }

}

// Client.main(process.argv.slice(2));