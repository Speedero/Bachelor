export class InputFieldState {
    inputValue: number;
    setInputValue: React.Dispatch<React.SetStateAction<number>>;
    
    // test: [string, React.Dispatch<React.SetStateAction<string>>]
    
    constructor(inputValue: number, setInputValue: React.Dispatch<React.SetStateAction<number>>) {
        this.inputValue = inputValue;
        this.setInputValue = setInputValue;
        // this.test = [this.inputValue, this.setInputValue]
    }

    public setValue(value: number) {
        console.log("in der Methode setValue");
        this.setInputValue(value);
    }

    public getValue(): number {
        return this.inputValue;
    }
    
}