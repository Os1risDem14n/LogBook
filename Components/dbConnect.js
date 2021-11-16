import * as SQLite from 'expo-sqlite'

export const dbConnect = 
{
    connect: () => SQLite.openDatabase("RentalZDB",1.0),
}