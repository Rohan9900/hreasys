import FilterListIcon from '@mui/icons-material/FilterList';
import './utils.css';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// export function FilterButton() {
//     return (
//         <div>
//             <button type="button" className="filter-btn">
//                 Filter
//                 <FilterListIcon />
//             </button>
//         </div>
//     );
// }

export function DownloadCsv() {
    return (
        <div>
            <button type="button" className="gray-button">
                <FileDownloadOutlinedIcon />
                Download .csv
            </button>
        </div>
    );
}

export function SalaryStatement(props) {
    const { parentCallback } = props;
    return (
        <div>
            <button type="button" className="gray-button" onClick={parentCallback}>
                <FileDownloadOutlinedIcon />
                Salary Statement
            </button>
        </div>
    );
}

export function SalaryStatementFormat(props) {
    const { parentCallback3 } = props;
    return (
        <div>
            <button type="button" className="gray-button" onClick={parentCallback3}>
                <FileDownloadOutlinedIcon />
                Salary Sheet
            </button>
        </div>
    );
}
