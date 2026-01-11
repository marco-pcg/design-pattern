import { FlyOut, FlyOutItem, FlyOutList, FlyOutToggle } from "./FlyOut";

export default function FlyOutMenu() {
    return (
        <FlyOut>
            <FlyOutToggle />
            <FlyOutList>
                <FlyOutItem>Edit</FlyOutItem>
                <FlyOutItem>Delete</FlyOutItem>
            </FlyOutList>
        </FlyOut>
    )
}