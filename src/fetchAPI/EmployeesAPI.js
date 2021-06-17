export function getEmployeesAPI() {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/employees";
        fetch(url, {
            method: "GET",
        })
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function createEmployeesAPI(data) {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/employees";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function editEmployeesAPI(data, id) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/employees/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function deleteEmployeesAPI(id) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/employees/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}
