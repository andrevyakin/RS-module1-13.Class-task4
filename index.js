class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!Object.keys(this.words).some(key => key === word))
            this.words[word] = {word, description};
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        return Object.values(this.words).forEach(i => console.log(`${i.word} - ${i.description}`));
    }
}

class HardWordsDictionary extends Dictionary {
    add(word, description) {
        if (!Object.keys(this.words).some(key => key === word))
            this.words[word] = {word, description, isDifficult: true};
    }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add("дилетант", "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.");
hardWordsDictionary.add("неологизм", "Новое слово или выражение, а также новое значение старого слова.");
hardWordsDictionary.add("квант", "Неделимая часть какой-либо величины в физике.");
hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();