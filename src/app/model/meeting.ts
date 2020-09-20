export class Meeting {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  location: string;

  print(): void {
    console.log(
      'FirstName= ' +
        this.firstName +
        ', ' +
        'LastName= ' +
        this.lastName +
        ', ' +
        'Date= ' +
        this.date +
        ', ' +
        'Location= ' +
        this.location
    );
  }
}
