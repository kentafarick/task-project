"use client";

import Select, {
    components,
    DropdownIndicatorProps,
    PlaceholderProps,
    SingleValueProps,
} from "react-select";

import styles from "./ApartmentSelect.module.scss";

type ApartmentOption = {
    value: string;
    label: string;
};

const options: ApartmentOption[] = [
    { value: "terrace apartment", label: "квартира с терассой" },
    { value: "1-bedroom", label: "1-комнатная" },
    { value: "2-bedroom", label: "2-комнатная" },
    { value: "3-bedroom", label: "3-комнатная" },
    { value: "4-bedroom", label: "4-комнатная" },
    { value: "penthouse", label: "Пентхаус" },
];

function RollingText({ children }: { children: React.ReactNode }) {
    return (
        <span className={styles.value}>
            <span className={styles.text}>
                <span>{children}</span>
                <span>{children}</span>
            </span>
        </span>
    );
}

function SingleValue(props: SingleValueProps<ApartmentOption, false>) {
    return (
        <components.SingleValue {...props}>
            <RollingText>{props.children}</RollingText>
        </components.SingleValue>
    );
}

function Placeholder(props: PlaceholderProps<ApartmentOption, false>) {
    return (
        <components.Placeholder {...props}>
            <RollingText>{props.children}</RollingText>
        </components.Placeholder>
    );
}

function DropdownIndicator(props: DropdownIndicatorProps<ApartmentOption, false>) {
    return (
        <components.DropdownIndicator {...props}>
            <span className={styles.arrow}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </components.DropdownIndicator>
    );
}

export default function ApartmentSelect() {
    return (
        <Select
            instanceId="apartment-select"
            inputId="apartment-select-input"
            className={styles.select}
            classNamePrefix="apartmentSelect"
            options={options}
            placeholder="Выбрать квартиру"
            isSearchable={false}
            unstyled
            components={{
                SingleValue,
                Placeholder,
                DropdownIndicator,
                IndicatorSeparator: () => null,
            }}
        />
    );
}