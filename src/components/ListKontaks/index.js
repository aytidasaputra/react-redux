import React, { useEffect, startTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak } from '../../actions/KontakActions';

export default function ListKontaks() {

    //ambil data dari reducers
    const {
        getListKontaksResult,
        getListKontaksLoading,
        getListKontaksError
    } = useSelector((state) => state.KontakReducers);

    const dispatch = useDispatch();

    //hit api
    useEffect(() => {
        dispatch(getListKontak());
    }, [dispatch]);

    return (
        <><div style={{ padding: 50 }}>
            <h2>ListKontaks</h2>
            {getListKontaksResult ? (
                getListKontaksResult.map((kontaks) => {
                    return (
                        <p>{kontaks.id} - {kontaks.nama} - {kontaks.nohp}</p>
                    )
                })
            ) : getListKontaksLoading ? (
                <p>Laodinggg</p>
            ) : <p>{getListKontaksError ? getListKontaksError : "Data Kosong"}</p>}
        </div>

        </>
    );
}
