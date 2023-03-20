export default async function graphqlRequest(query) {
    const url = "http://localhost/next-blog/index.php?graphql"
    const headers = {'Content-Type': 'application/json'};

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resdata = await res.json();
    return resdata;
}
