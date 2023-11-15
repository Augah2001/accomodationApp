
export const Filter = (data: {[keys: string]:any}[], filterProp:any, entity: any) => {
  
    const newData = data.filter(dataItem => dataItem[entity] === filterProp)
    return newData
}

