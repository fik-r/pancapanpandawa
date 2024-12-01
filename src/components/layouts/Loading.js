export default function Loading({ loading }) {
    return (
        loading && (
            <div className="loading-overlay">
                <div className="spinner"></div>
            </div>
        )
    );
};
