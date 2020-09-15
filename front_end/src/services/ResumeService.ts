export const GetResume = () => {
    return fetch("/api/v1/resume/1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(json => {
       return json.body;
    });
};
