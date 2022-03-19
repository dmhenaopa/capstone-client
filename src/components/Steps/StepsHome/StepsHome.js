import React from 'react';
import styles from './StepsHome.module.scss';

export function StepsHome() {
    return (
        <div className={styles.divStepsHome}>
            <h2 className={styles.h2StepsHome}>Solo debe seguir 4 sencillos pasos:</h2>
            <table className={styles.tableStepsHome}>
                <tr className={styles.firstRow}>
                    <td className={styles.decoration}>   -------------------</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td className={styles.decoration}>   -------------------</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td className={styles.decoration}>   -------------------</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td className={styles.decoration}> </td>
                </tr>
                <tr className={styles.whiteSpace}>
                    <td>-</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>-</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>-</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>-</td>
                </tr>
                <tr className={styles.secondRow}>
                    <td><b>Contacte con nosotros</b></td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td><b>Cree su usuario y modifique su perfil</b></td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td><b>Adquiera los productos que necesite</b></td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td><b>Revise su correo electrónico</b></td>
                </tr>
                <tr className={styles.thirdRow}>
                    <td>Le enviaremos toda la información necesaria para que se registre y realice el pago.</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>Con ello tendrá acceso a una cuenta propia.</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>Realice el pago y espere unos minutos hasta que lo validemos.</td>
                    <td className={styles.whiteSpaceColumns}>-</td>
                    <td>Confirmaremos su suscripción al correo electrónico ¡Y listo! así de fácil es.</td>
                </tr>
            </table>
        </div>
    );
}