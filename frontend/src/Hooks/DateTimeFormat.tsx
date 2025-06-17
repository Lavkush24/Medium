
export const DateTimeFormat = ({date}: {date: string}) => {
    let formatDate = new Date(date);

    const time = formatDate.toLocaleTimeString("en-us",{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const dateString = formatDate.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return(
        <span>{`${time}, ${dateString}`}</span>
    )
}