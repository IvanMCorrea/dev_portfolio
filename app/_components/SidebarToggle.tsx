import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

type Props = {
  expanded: Boolean;
  setExpanded: any;
};

export function SidebarToggle({ expanded, setExpanded }: Props) {
  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className="flex items-center"
    >
      {expanded ? (
        <>
          <FontAwesomeIcon
            icon={faLeftLong}
            className="text-neutral-700 dark:text-neutral-100 h-5 w-5"
          />
          <span className="pl-3">Close</span>
        </>
      ) : (
        <FontAwesomeIcon
          icon={faRightLong}
          className="text-neutral-700 dark:text-neutral-100 h-5 w-5"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
