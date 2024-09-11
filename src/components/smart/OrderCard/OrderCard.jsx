export function OrderCard({ date, total, status }) {
    return (
        <article className="border rounded p-4 md:p-8">
            <p className="text-black-50">{date}</p>
            <p className="mt-6 font-bold text-5xl">${Number(total).toFixed(2)}</p>
            <p className="bg-green-400 w-fit mt-4 rounded px-4 py-2 font-semibold">{status}</p>
            <p className="mt-8 text-black-50 text-center">Click in the order to view more</p>
        </article>
    );
}