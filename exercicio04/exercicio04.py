import json
import csv


if __name__ == "__main__":
    with open("./books.json", "r") as jsonFile:
        books = json.load(jsonFile)

    categories, report, tot_books = {}, {}, 0

    for book in books:
        tot_books += 1
        for category in book["categories"]:
            if category in categories:
                categories[category] += 1
                report[category] = categories[category] / tot_books * 100
            else:
                categories[category] = 1
                report[category] = categories[category] / tot_books * 100

    with open("exercicio04.csv", "w", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(["categoria", "porcentagem"])
        for category, percent in report.items():
            writer.writerow([category, percent])
