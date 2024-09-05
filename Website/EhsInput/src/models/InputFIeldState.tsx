export class InputFieldState {
    inputValue: number;
    setInputValue: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    desctiption: string;
    
    constructor(inputValue: number, setInputValue: React.Dispatch<React.SetStateAction<number>>, name: string, desctiption: string) {
        this.inputValue = inputValue;
        this.setInputValue = setInputValue;
        this.name = name;
        this.desctiption = desctiption;
    }

}