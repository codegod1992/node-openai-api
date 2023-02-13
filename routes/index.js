/**
 * Redirects to the `index.html` page.
 *
 * This function simply returns a `302` HTTP status and redirects
 * to the `public/index.html` file.
*/
var exec = require('child_process').exec;
const fs = require('fs/promises');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function sh(cmd) {
    return new Promise(function (resolve, reject) {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
}
// var textToBeSummarized = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."
var textToBeSummarized = " 10. Additional Terms        If you are a U.S. Federal or U.S. state entity, or a federally-recognized tribal entity performing governmental functions and eligible for funding and services from the U.S. Department of the Interior, these terms apply to you. 10.1 United States Federal, State, and Tribal Governments. If you are a (a) United States federal entity, including without limitation, a bureau, office, agency, department, or other entity of the United States government; (b) a United States state entity, including without limitation, a bureau, department, office, or other entity of a state or a local, county, borough, commonwealth city, municipality, town, township, special purpose district, or other entity established by the laws of a state and located in such state; or (c) a federally-recognized tribal entity performing governmental functions and eligible for funding and services from the United States Department of the Interior by virtue of its status as an Indian tribe, or in Alaska, a Native village or Alaska Regional Native corporation, the following terms apply:10.1.1 Failure to Pay. Twilio may assess, and you will pay, interest equal to the maximum amount allowable by applicable law, if you fail to pay the Fees and remedy such failure within fifteen (15) days of the date Twilio provides you with written notice of the same.10.1.2 Public Disclosure Laws. Section 4.3.2 (Use and Disclosure) of this Agreement does not prohibit you from disclosing the terms of this Agreement to the extent required by public disclosure laws applicable to you (Public Disclosure Laws), provided that, to the extent permissible, any material legal terms included in this Agreement (e.g., representations and warranties, indemnification, limitation of liability) and any trade secrets, non-publicly available pricing, future business plans, future product plans or features, or business strategies of Twilio are redacted.10.1.3 Compelled Disclosure of Confidential Information. Receiving Party will provide reasonable cooperation to Disclosing Party in connection with a Compelled Disclosure at Disclosing Partys sole expense to the extent permitted by applicable law.10.1.4 Customer Application IP Infringement. You represent and warrant that each Customer Application, or your or your End Users use of each Customer Application, does not and will not infringe or misappropriate a third partys intellectual property rights. Your breach of this Section 10.1.4 will not be subject to liability limitations set forth in Section 7 (Limitation of Liability) of this Agreement.10.1.5 Use of Marks. Twilio will not use your name, logo, or a description of your use case(s) on Twilios website, earnings release and calls, or marketing or promotional materials without your prior written consent.10.1.6 Indemnification by Customer. Your obligations in Section 6.2 (Indemnification by Customer) of this Agreement will apply to the extent permitted by applicable law, regulation, or procedure.10.1.7 Assignment. The ability of either party to assign this Agreement without consent pursuant to Section 9.2 (Assignment) of this Agreement will not apply where prohibited by applicable law.10.1.8 Governing Law.  Section 9.6 (Governing Law and Attorneys Fees) of this Agreement is hereby deleted in its entirety and replaced with the following:Governing Law. This Agreement will be governed by and interpreted according to (a) United States Federal law, if you are a United States Federal entity, or (b) the laws of the state in which you are located without regard to conflicts of laws and principles that would cause the application of the laws of another jurisdiction, if you are not a UnitedStates Federal entity. This Agreement will not be governed by the United Nations Convention on Contracts for the International Sale of Goods.10.1.9 Dispute Resolution. Section 9.7 (Dispute Resolution) of this Agreement is hereby deleted in its entirety and replaced with the following:Except as otherwise specified in applicable law, in the event of a dispute, claim, or controversy arising out of or in connection with this Agreement or the breach, termination, enforcement, interpretation, or validity thereof (other than for disputes, claims, or controversies related to the intellectual property of a party) (collectively, Disputes), each partys senior representatives will engage in good faith negotiations with the other partys senior representatives to amicably resolve a Dispute. If the parties are unable to resolve a Dispute within thirty (30) days after the first request to engage in good faith negotiations or within such other time period as the parties may agree to in writing, then either party may seek relief as set forth in Section 9.6 (Governing Law and Attorneys Fees).10.1.10 Code of Federal Regulations. Twilio agrees to comply with the clauses included under 48 C.F.R.  52.244-6 Subcontracts for Commercial Products and Commercial Services, and all applicable equal opportunity laws including the provisions of Executive Order 11246, as amended, Section 402 of the Vietnam Era Veterans Readjustment Assistance Act of 1974 (38 USC 4212), and Section 503 of the Rehabilitation Act of 1973, as amended, and the regulations at 41 C.F.R.  60-1 -60-60, 60-250, and 60-741. The affirmative action clause and regulations contained in the preceding sentence are incorporated by reference into this Agreement.10.1.11 Commercial Items. The Services are Commercially available off-the-shelf (COTS) items, consisting of Commercial Products(s), Commercial Computer Software and Commercial Computer Software Documentation, as such terms are used in 48 C.F.R.  2.101. Consistent with 48 C.F.R.  12.212 or 48 C.F.R.  227.7202-1-227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being provided (a) only as Commercial Items and (b) with only those rights as are granted to all other Twilio customers. Unpublished-rights are reserved under the copyright laws of the United States.10.1.12 Conflict. In the event of any conflict between this Section 10.1 and any other terms of this Agreement, this Section 10.1 will prevail.If you are a microenterprise, small enterprise, or a not for profit organisation and use our services within the EEA or U.K., these terms apply to you.10.2 European Electronic Communications Code. If you are a microenterprise, small enterprise, or not for profit organisation, and Twilio provides you the Services within the European Economic Area or United Kingdom, you agree you have read and accept theEuropean Electronic Communications Code Rights Waiver.If your business entity is registered in Brazil, these terms apply to you.10.3 Brazil. If you are domiciled in Brazil, the following terms apply:10.3.1 Dispute Resolution. Section 9.7 (Dispute Resolution) of this Agreement is hereby deleted in its entirety and replaced with the following:In the event of a dispute, claim, or controversy arising out of or in connection with this Agreement or the breach, termination, enforcement, interpretation, or validity thereof (collectively, Disputes), each partys senior representatives will engage in good faith negotiations with the other partys senior representatives to amicably resolve a Dispute. If the parties are unable to resolve a Dispute within thirty (30) days after the first request to engage in good faith negotiations or within such other time period as the parties may agree to in writing, then either party may commence (a) litigation proceedings if theamounts being sought are less than two hundred thousand dollars ($200,000 USD) or (b) binding arbitration under the Rules of CAM-CCBC if the amounts being sought are greater than or equal to two hundred thousand dollars ($200,000 USD). To the extent a Dispute is submitted for arbitration, the parties will share equally the fees and expenses of the CAM-CCBC arbitrator. The arbitration will be conducted by a sole arbitrator chosen by the mutual agreement of the parties or, failing that, by CAM-CCBC under its then prevailing rules. Judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. The arbitrator will have the authority to grant specific performance or any other equitable or legal remedy, including provisional remedies. Each party will be responsible for its own incurred expenses arising out of any dispute resolution procedure. Any arbitration proceedings will take place in the English language in the City and State of So Paulo, Brazil.If your business entity is registered in Japan, these terms apply to you. 10.4 Japan. If you are domiciled in Japan, the following terms apply:10.4.1 Intended Use. The Services are intended for business use by corporate or business entities, and you agree that you will not use the Services for any personal or individual use.10.4.2 Required Information and Verification Process. Depending on the Services you use, you may be required to submit copies of government-issued ID documents to Twilio and/or complete verification processes (e.g., via post) as required under applicable law or regulation, including, without limitation, the Act on Prevention of Transfer of Criminal Proceeds and the Telecommunications Business Act.10.4.3 Taxes and Communications Surcharges. Taxes, as defined in Section 3.2.1 (Taxes) of this Agreement, will include Japanese consumption tax. The universal service fee and the telephone relay service fee charged by telecommunication providers (e.g., carriers) will be borne by you as part of the Communications Surcharges set forth in Section 3.2.2 (Communications Surcharges) of this Agreement.10.4.4 Currency. All Fees are payable in Japanese Yen, except as otherwise set forth in writing, including in an applicable Order Form(s) or an invoice to the extent you procure the Services without an Order Form.10.4.5 Intellectual Property Rights. Any intellectual property rights vested by Twilio under this Agreement will include the rights set forth in Article 27 (Right of Adaptation) and 28 (Original Authors Right in Derivative Works) of the Copyright Act of Japan, Act No. 48 of May 6, 1970. Further, you agree not to exercise against Twilio, or any other third parties designated by Twilio, any moral rights you may have in any contents, including, without limitation, the feedback or suggestions you or your End Users provide regarding the Services that Twilio is entitled to exploit under this Agreement.10.4.6 Anti-Social Forces. Each party represents and warrants that it (a) is not an anti-social force (meaning here and hereinafter, gangsters, right-wing groups, anti-social forces, and others equivalent thereto) and (b) does not have any exchange or involvement with anti-social forces, such as cooperation or involvement in the maintenance, operation, or management of anti-social forces, through funding, or other means.10.4.7 Dispute Resolution. Section 9.7 (Dispute Resolution) of this Agreement is hereby deleted in its entirety and replaced with the following:In the event of a dispute, claim, or controversy arising out of or in connection with this Agreement or the breach, termination, enforcement, interpretation, or validity thereof(other than for disputes, claims, or controversies related to the intellectual property of a party) (collectively, Disputes), each partys senior representatives will engage in good faith negotiations with the other partys senior representatives to amicably resolve a Dispute. If the parties are unable to resolve a Dispute within thirty (30) days after the first request to engage in good faith negotiations or within such other time period as the parties may agree to in writing, then either party may seek relief as set forth in Section 9.6 (Governing Law and Attorneys Fees).10.4.8 Conflict. In the event of any conflict between this Section 10.4 and any other terms of this Agreement, this Section 10.4 will prevail.LegalPrivacyTwilio.orgPress & MediaSIGNALInvestorsJobs"
var trainData = [
    { name: "Colleen Delgado", country: "United States", city: "New York", salary: "120000"},
    { name: "Michael Kornblum", country: "United States", city: "buffalo", salary: "110000"},
    { name: "John Martin", country: "United States", city: "Los Angeles", salary: "130000"},
    { name: "Filip Jawaski", country: "Poland", city: "Warsaw", salary: "125000"},
    { name: "Kevin Johnson", country: "United States", city: "Brandom", salary: "131000"},
]
var jsonlfile = [
    {"prompt": "About Colleen Delgado?\n\n###\n\n", "completion": "country: 'United States', city: 'New York', salary: '120000'\n"},
    {"prompt": "About Michael Kornblum?\n\n###\n\n", "completion": "country: 'United States', city: 'buffalo', salary: '110000'\n"},
    {"prompt": "About John Martin?\n\n###\n\n", "completion": "country: 'United States', city: 'Los Angeles', salary: '130000'\n"},
    {"prompt": "About Filip Jawaski?\n\n###\n\n", "completion": "country: 'Poland', city: 'Warsaw', salary: '125000'\n"},
    {"prompt": "About Kevin Johnson?\n\n###\n\n", "completion": "country: 'United States', city: 'Brandom', salary: '131000'\n"},
   
]
var modelID = "davinci:ft-augmented-intelligence-research-2023-02-09-19-37-12"
var prompt = "About Colleen Delgado?"
exports.index = function( request, response ) {
    
    response.statusCode = 302;
    response.setHeader("Location", "/index.html");
    response.end('<p>302. Redirecting to index.html</p>');
};

exports.finetune = async function( request, response )
{
  //Parameters-> ObjectArray: {[],[]...}
  //return-> finetuned model: String
  var jsonlfile = []
  trainData.forEach(element => {
    var temp = {"prompt": "", "completion":""}
    temp.prompt = "About " + element.name + "?\n\n###\n\n"
    temp.completion = "country: '" + element.country + "', city: '" + element.city + "', salary: '" + element.salary + "'\n"
    jsonlfile.push(temp)
    temp.prompt = element.name + "?\n\n###\n\n"
    jsonlfile.push(temp)
  });
  jsonlfile.forEach(async element => {
      await fs.writeFile('test.jsonl', JSON.stringify(element)+"\n", { flag: 'a+' });
  });
  try {
    sh("openai api fine_tunes.create -t test.jsonl -m davinci")
    .then(async(stdout) => {
      var cmdStr = ""
      while(cmdStr.search("succeeded") < 0)
      {
        console.log(stdout.split("\r\n"))
        cmdStr = await sh(stdout.split("\r\n")[stdout.split("\r\n").length-3])
      }
      resultStr = cmdStr.split("\r\n")[cmdStr.split("\r\n").length - 4].split(":")
  
      console.log("cmdStr::", cmdStr, " splited::", cmdStr.split("\r\n"))
      console.log("resultstr::", resultStr)
      console.log("returnStr::", resultStr[resultStr.length-2] + ":" + resultStr[resultStr.length-1])
      
      response.end({"code": 200, "message": "success", "body": resultStr[resultStr.length-2] + ":" + resultStr[resultStr.length-1]})    
      console.log(stdout)
    })
  } catch (error) {
    response.end({"code": 500, "message": "failed", "body": error})    
  }

    // while fineTuneConfirm.find("succeeded") < 0:
    //     print("#########", fineTuneConfirm.split("\n"))
    //     fineTuneConfirm = out(fineTuneConfirm.split("\n")[-3])


    // for (let line of stdout.split('\n')) {
    //     console.log(`${line}`);
    // }
}
exports.testcompletion = async function( request, response )
{
  //parameters-> prompt(question) : String, modelID : String
  //return-> completion(answer): String 
  if(modelID == "")
    modelID = "text-davinci-003"
  var res = ""
  try {
    res = await openai.createCompletion({
      model: modelID,
      prompt: prompt,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
  } catch (error) {
    response.end({"code": 500, "message": "failed", "body": error})    
  }
  console.log("testcompletion!!!", res.data.choices[0].text)
  response.end({"code": 200, "message": "success", "body": res.data.choices[0].text})    
}

exports.summary = async function( request, response )
{
  //parameters-> textToBeSummarized: String
  //return-> summarized Text: String
  result = ""
  while(1){
    result = ""
    console.log("textToBeSummarized, ddddd", textToBeSummarized.length)
    for (let i = 0; i < textToBeSummarized.length / 5000; i++) {
      var context =  textToBeSummarized.slice(i * 5000, ( i + 1 ) * 5000)
      console.log("result------------------------------------------------------::", result, "textsum::", context)
      var sumRes = ""
      try {
        sumRes = await openai.createCompletion({
          model: "text-babbage-001",
          prompt: "Summarize this :\n\n" + context,
          temperature: 0.2,
          max_tokens: 500,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
      } catch (error) {
        response.end({"code": 500, "message": "failed", "body": error})
      }
      console.log("response------------------------------------------------------", sumRes.data.choices[0].text)
      result += sumRes.data.choices[0].text + " ";
      console.log("result+++++++++++++++++++++++++++++++++++++++++++++++++++++++++", result)
    }
    textToBeSummarized = result
    if(result.length < 5000)
    {
      console.log("result::::::::::::::::::::::::::::::::::::::::::::::::::::::::::", result)
      response.end({"code": 200, "message": "success", "body": result})
      return
    }
  }
  console.log("summarization");
}