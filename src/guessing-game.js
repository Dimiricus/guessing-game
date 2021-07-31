class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {

        this.result = this.min + Math.ceil( (this.max - this.min) / 2 );

        return this.result;
    }

    lower() {

        this.max = this.result;
    }

    greater() {

        this.min = this.result;
        
    }
}

module.exports = GuessingGame;




/* 
guess() {

        if ( (this.max - this.min) % 2 == 0 ) {

            this.result = ( this.min + (this.max - this.min) / 2 ) + 1;

        } else {

            this.result = this.min + Math.round((this.max - this.min) / 2 );
        }
        
        return this.result;
    }

    lower() {

        this.max = this.min + Math.floor( (this.max - this.min) / 2 );
        
    }

    greater() {

        if ( (this.max - this.min) % 2 == 0 ) {

            this.min = ( this.min + (this.max - this.min) / 2 ) + 1;

        } else {

            this.min = this.min + Math.ceil( (this.max - this.min) / 2 );
        }
        
    }
    */
