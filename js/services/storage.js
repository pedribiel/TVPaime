const PREFIX = "TCPaime";

export const Storage = {

    get(key) {

        const data = localStorage.getItem(`${PREFIX}_${key}`);

        return data ? JSON.parse(data) : [];

    },

    set(key, value) {

        localStorage.setItem(
            `${PREFIX}_${key}`,
            JSON.stringify(value)
        );

    },

    remove(key) {

        localStorage.removeItem(`${PREFIX}_${key}`);

    }

};
