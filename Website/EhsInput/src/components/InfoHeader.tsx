import '../styles/headers.css';

interface InfoHeaderProps {
    month: string;
    year: number;
    werk: string;
}

export default function InfoHeader({ month, year, werk }: InfoHeaderProps) {
    return (
        <div className="mx-auto">
        <h1>FMS EHS Dateneingabe</h1>
        <h3>Monat: {month} {year}</h3>
        <h3>Werk: {werk}</h3>
        </div>
    );
    }