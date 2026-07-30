import json
from pathlib import Path
from typing import Any, Dict, List

BASE_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = BASE_DIR.parent / "data"
USERS_FILE = DATA_DIR / "users.json"
HISTORY_FILE = DATA_DIR / "history.json"


def _ensure_file(path: Path, default: Any) -> None:
    if not path.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(default, indent=2), encoding="utf-8")


_ensure_file(USERS_FILE, [])
_ensure_file(HISTORY_FILE, [])


def load_users() -> List[Dict[str, Any]]:
    return json.loads(USERS_FILE.read_text(encoding="utf-8"))


def save_users(users: List[Dict[str, Any]]) -> None:
    USERS_FILE.write_text(json.dumps(users, indent=2), encoding="utf-8")


def load_history() -> List[Dict[str, Any]]:
    return json.loads(HISTORY_FILE.read_text(encoding="utf-8"))


def save_history(history: List[Dict[str, Any]]) -> None:
    HISTORY_FILE.write_text(json.dumps(history, indent=2), encoding="utf-8")


def append_history(entry: Dict[str, Any]) -> None:
    history = load_history()
    history.append(entry)
    save_history(history)


def get_history_for_user(user_id: str) -> List[Dict[str, Any]]:
    history = load_history()
    return [entry for entry in history if entry.get("user_id") == user_id]
