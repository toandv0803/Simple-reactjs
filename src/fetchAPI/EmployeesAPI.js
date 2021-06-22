const domain = "http://localhost:3001";

export default function fetchAPI(path, method, data) {
    let objFetch;
    if (method === "GET" || method === "DELETE") {
        objFetch = {
            method,
        };
    } else {
        objFetch = {
            method,
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        };
    }
    return new Promise((resolve, reject) => {
        const url = domain + path;
        fetch(url, objFetch)
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}
