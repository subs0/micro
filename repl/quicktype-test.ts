import {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
    JSONSchemaInput,
    FetchingJSONSchemaStore,
} from 'quicktype-core'

const sample_0 = {}
const sample_1 = {
    data: {},
    resource: {},
}
const sample_2 = {
    data: { lambda_function: { required: 'some string' } },
    resource: { lambda_function: { required: 'some string' } },
}
const sample_3 = {
    data: { lambda_function: { required: 'some string', optional: 'another string' } },
    resource: { lambda_function: { required: 'some string', optional: 'another string' } },
}

const samples = [sample_0, sample_1, sample_2, sample_3]

async function quicktypeJSON(typeName = 'typeName', targetLanguage = 'typescript') {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage)

    // We could add multiple samples for the same desired
    // type, or many sources for other types. Here we're
    // just making one type from one piece of sample JSON.
    await jsonInput.addSource({
        name: typeName,
        samples: samples.map((x) => JSON.stringify(x)),
    })

    const inputData = new InputData()
    inputData.addInput(jsonInput)

    const { lines } = await quicktype({
        inputData,
        lang: targetLanguage,
    })
    return lines
}

//quicktypeJSON().then((x) => console.log(x.join('\n')))

/* output:
...
export interface TypeName { 
    data?:     Data; 
    resource?: Data; 
} 
 
export interface Data { 
    lambda_function?: LambdaFunction; 
} 
 
export interface LambdaFunction { 
    required:  string; 
    optional?: string; 
} 
...

🔅 lesson learned: if you want a child property to be required, 
they must be present whenever the parent is, 
else it will be marked as optional
*/
