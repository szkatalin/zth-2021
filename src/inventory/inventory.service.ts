import { Injectable } from "@nestjs/common";
import PostUrlDto from "./dto/postUrlDto";
import "csv-writer";

@Injectable()
export class InventoryService {
  createCsvWriter: (arg0: {
    path: string;
    header: { id: string; title: string }[];
  }) => any;

  constructor() {
    this.createCsvWriter = require("csv-writer").createObjectCsvWriter;
  }

  test(json: PostUrlDto) {
    console.log(json);

    Object.keys(json).forEach(key => {
      console.log(key);
    });

    const csvWriter = this.createCsvWriter({
      path: "inventory.csv",
      header: [
        { id: "name", title: "Name" },
        { id: "surname", title: "Surname" },
        { id: "age", title: "Age" },
        { id: "gender", title: "Gender" }
      ]
    });

    const data = [
      {
        name: "John",
        surname: "Snow",
        age: 26,
        gender: "M"
      },
      {
        name: "Clair",
        surname: "White",
        age: 33,
        gender: "F"
      },
      {
        name: "Fancy",
        surname: "Brown",
        age: 78,
        gender: "F"
      }
    ];

    csvWriter
      .writeRecords(data)
      .then(() => console.log("The CSV file was written successfully"));
  }
}
