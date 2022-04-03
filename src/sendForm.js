import APIForm from "./APIForm";

document.addEventListener("load", (event) => {
    const form = document.querySelector("#formContact");
    console.log(form);
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("goad");
        const formData = new FormData(form);
        await APIForm.post(
            `/`,
            { formData },
            {
                headers: {
                    "test-key":
                        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ",
                },
            }
        ).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    });
});
