import React from "react";
import Modal from "../../../core/Modal";
import { ModalProps } from "../../../core/Modal/index.types";
import Typography from "../../../core/Typography";
import { TYPOGRAPHY_VARIANT } from "../../../constants/theme/typography";
import FormFilter from "./FormFilter";

interface Props extends ModalProps{

}
const FilterModal: React.FC<Props> = (props) => {
    const {...rest} = props
    return(
        <Modal {...rest}>
            <Modal.Header>
                <Typography variant={TYPOGRAPHY_VARIANT.HEADING_3}>Bộ lọc</Typography>
            </Modal.Header>
            <FormFilter />
        </Modal>
    )
}

export default FilterModal;