export function render(movies) {
    return `<!DOCTYPE html>
    <html lang="de">
        <head>
            <meta charset="UTF-8">
            <title>Filmliste</title>
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <a href="/movie/form">Neuen Film erfassen</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>${movies.map(movie => `<tr>
                        <td>${movie.id}</td>
                        <td>${movie.title}</td>
                        <td><a href="/movie/delete/${movie.id}">löschen</a></td>
                        <td><a href="/movie/form/${movie.id}">bearbeiten</a></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </body>
        </html>`
}