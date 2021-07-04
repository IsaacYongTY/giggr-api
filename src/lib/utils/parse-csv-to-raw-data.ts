import fs from "fs";
import csv from "csv-parser";

interface CsvRawSong {
    title: string
}

export default function parseCsvToRawData(csvFile : any) : Promise<CsvRawSong[]>{

    return new Promise((resolve, reject) => {
        let data : any[] = []

        fs.createReadStream(csvFile)
            .pipe(csv({
                    mapHeaders: ({ header, index}) => header.trim(),
                    mapValues: ({ header, index, value}) => value.trim(),

                })
            )
            .on('data', async (row) => {
                if(row.title) {
                    data.push(row)
                }

            })
            .on('end', async () => {
                console.log("CSV parsed successfully")
                resolve(data)
            })
            .on('error', reject)

    })

}