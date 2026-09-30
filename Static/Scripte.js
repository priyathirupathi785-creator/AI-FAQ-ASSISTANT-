document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.querySelector("form");

        if (form) {

            form.addEventListener(
                "submit",
                function () {

                    const input =
                        document.querySelector(
                            "input[name='question']"
                        );

                    if (
                        input &&
                        input.value.trim() === ""
                    ) {

                        alert(
                            "Please enter a question."
                        );

                    }

                }
            );

        }

    }
);
