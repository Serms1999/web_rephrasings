export class DatabaseError extends Error {
    constructor(props) {
        super(props);
        this.name = 'DatabaseError';
    }
}