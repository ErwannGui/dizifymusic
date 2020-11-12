import React from "react";
import Table from "./tables";

class Admin extends React.Component {
    render() {
        return (
            <section className="admin">
                <h1 className="has-text-white is-size-2">Interface Administrateur</h1>
                <Table />
            </section>
        );
    }
}

export default Admin
