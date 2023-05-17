import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

type Props = {
  expanded: Boolean;
  setExpanded: any;
};

export function SidebarToggle({ expanded, setExpanded }: Props) {
  return (
    <button onClick={() => setExpanded(!expanded)} className="w-6 h-6">
      {expanded ? (
        <FontAwesomeIcon
          icon={faLeftLong}
          className="text-neutral-950 dark:text-neutral-100"
          size="xl"
        />
      ) : (
        <FontAwesomeIcon
          icon={faRightLong}
          className="text-neutral-950 dark:text-neutral-100"
          size="xl"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
